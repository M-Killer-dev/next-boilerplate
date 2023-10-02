import Image from 'next/image';

const Sponsors = () => (
  <table className="border-collapse">
    <tbody>
      <tr className="h-56">
        <td className="border-2 border-gray-300 p-3">
          <a href="https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate">
            <Image
              src="/assets/images/clerk.png"
              alt="Clerk – Authentication & User Management for Next.js"
              width={260}
              height={224}
            />
          </a>
        </td>
        <td className="border-2 border-gray-300 p-3">
          <a href="https://turso.tech/?utm_source=nextjsstarterbp">
            <Image
              src="/assets/images/turso.png"
              alt="SQLite Developer Experience"
              width={260}
              height={224}
            />
          </a>
        </td>
        <td className="border-2 border-gray-300 p-3">
          <a href="https://upstash.com/?utm_source=nextjs-boilerplate">
            <Image
              src="/assets/images/redis.png"
              alt="Upstash"
              width={260}
              height={224}
            />
          </a>
        </td>
      </tr>
      <tr className="h-56">
        <td className="border-2 border-gray-300 p-3">
          <a href="https://nextlessjs.com">
            <Image
              src="/assets/images/nextlessjs.png"
              alt="React SaaS Boilerplate Next.js"
              width={260}
              height={224}
            />
          </a>
        </td>
      </tr>
    </tbody>
  </table>
);

export { Sponsors };
