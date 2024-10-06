export class AdminRepository {
  private ADMIN_CREDENTIALS = {
    email: process.env.ADMIN_EMAIL as string,
    password: process.env.ADMIN_PASSWORD as string,
  };

  async findAdminByEmail(email: string) {
    if (email === this.ADMIN_CREDENTIALS.email) {
      return this.ADMIN_CREDENTIALS;
    }

    return null;
  }
}
