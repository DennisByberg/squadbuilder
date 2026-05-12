import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const db = new PrismaClient({ adapter });

const seedPlayers = [
  {
    firstName: "Lionel",
    lastName: "Messi",
    club: "Inter Miami",
    imageUrl:
      "https://wallpapers.com/images/featured/lionel-messi-png-t4vkls6byyyh0qim.jpg",
  },
  {
    firstName: "Cristiano",
    lastName: "Ronaldo",
    club: "Al Nassr",
    imageUrl:
      "https://b.fssta.com/uploads/application/soccer/headshots/885.vresize.350.350.medium.1.png",
  },
  {
    firstName: "Kylian",
    lastName: "Mbappé",
    club: "Real Madrid",
    imageUrl: "https://cdn.futwiz.com/assets/img/fc25/faces/231747.png",
  },
  {
    firstName: "Lamine",
    lastName: "Yamal",
    club: "Real Madrid",
    imageUrl:
      "https://b.fssta.com/uploads/application/soccer/headshots/113441.png",
  },
];

async function seed() {
  console.log("Seeding players...");
  await db.player.createMany({ data: seedPlayers });
  console.log(`Inserted ${seedPlayers.length} players.`);
  await db.$disconnect();
}

seed();
