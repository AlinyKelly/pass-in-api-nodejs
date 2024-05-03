import { prisma } from '../src/lib/prisma';

async function seed() {
  await prisma.event.create({
    data: {
      id: '9150db59-3c00-4c6f-a69a-e00b7c5cf210',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento para devs que amam codar.',
      maximumAttendees: 120,
    }
  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})