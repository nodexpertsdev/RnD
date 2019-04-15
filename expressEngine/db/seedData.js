import DBService from '../lib/service/db.js';
import { User } from '../model/index.js';

export default async function seed() {
  const res = await DBService.count(User);

  if (res <= 0) {
    try {
      const admin = {
        email: 'admin@gmail.com',
        password: 'Admin@123',
        role: 'system-admin',
        companyName: 'nodeXperts',
        contactName: '',
        contactTitle: '',
        city: 'Noida',
        country: 'India',
        phone: '',
        fax: '',
      };
      await DBService.create(User, admin);
    } catch (err) {
      throw new Error(err);
    }
  }
}
