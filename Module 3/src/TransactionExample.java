import java.sql.*;

public class TransactionExample {
    public static void transfer(Connection con, int fromId, int toId, int amount) throws SQLException {
        try {
            con.setAutoCommit(false);

            try (PreparedStatement debit = con.prepareStatement("UPDATE accounts SET balance = balance - ? WHERE id = ?");
                 PreparedStatement credit = con.prepareStatement("UPDATE accounts SET balance = balance + ? WHERE id = ?")) {

                debit.setInt(1, amount);
                debit.setInt(2, fromId);
                debit.executeUpdate();

                credit.setInt(1, amount);
                credit.setInt(2, toId);
                credit.executeUpdate();

                con.commit();
                System.out.println("Transfer successful.");
            }
        } catch (SQLException e) {
            con.rollback();
            System.out.println("Transfer failed. Transaction rolled back.");
        }
    }
}
