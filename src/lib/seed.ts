import { db } from '@/lib/db';
import bcrypt from 'bcrypt';

(async function main() {
  const hashedPassword = await bcrypt.hash(process.env.MY_PASS!, Number(process.env.SALT_ROUNDS));
  // console.log(process.env.MY_PASS);


  const result = await db.myInfo.upsert({
    where: { email: 'a.hasnat.dev1@gmail.com' },
    update: {},
    create: {
      fullName: 'Abul Hasnat',
      email: 'a.hasnat.dev1@gmail.com',
      password: hashedPassword,
      aboutMe: '',
      imageUrl: '',
      github: 'https://github.com/aHasnat1997',
      linkedin: 'https://www.linkedin.com/in/a-hasnat/',
      whatsapp: 'https://wa.me/01725056703'
    }
  });

  console.log(result);
})()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  });
