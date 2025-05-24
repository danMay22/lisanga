import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const sections = [
  {
    title: 'About',
    links: [
      { name: 'Our Mission', href: '/about-us' },
      { name: 'Our Vision', href: '/services' },
    ],
  },
  {
    title: 'Complex Scolaire Sanga',
    links: [
      { name: 'Funding & Donation', href: '/faq' },
      { name: 'Register and Enroll', href: '/' },
    ],
  },
  {
    title: 'Socials and Blog',
    links: [
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/YonderWorshipCentreMidrand?mibextid=ZbWKwL',
      },
      {
        name: 'Youtube',
        href: 'https://www.youtube.com/channel/UCYjezpK2Gb1at4scpgEyM1A',
      },
    ],
  },
];

export default function SiteFooter() {
  return (
    <section className='bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#48cae4] to-[#023e8a]  py-20 text-center'>
      <div className='container flex flex-col items-center gap-5'>
        <footer>
          <div className='flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left'>
            <div className='flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start'>
              <div>
                <span className='flex items-center justify-center gap-4 lg:justify-start'>
                  {/*<img
                    src="https://shadcnblocks.com/images/block/block-1.svg"
                    alt="logo"
                    className="h-11"
                  />*/}
                  <p className='text-3xl text-white font-semibold'>
                  Complex Scolaire Sanga
                  </p>
                </span>
                <p className='mt-6 text-sm text-white'>
                  A dynamic multicultural School 
                </p>
              </div>
              <ul className='flex items-center space-x-6 text-muted-foreground'>
                <li className='font-medium hover:text-primary text-white'>
                  <a href='#'>
                    <FaInstagram className='size-6' />
                  </a>
                </li>
                <li className='font-medium hover:text-primary text-white'>
                  <a href='#'>
                    <FaFacebook className='size-6' />
                  </a>
                </li>
                <li className='font-medium hover:text-primary text-white'>
                  <a href='#'>
                    <FaTwitter className='size-6' />
                  </a>
                </li>
                <li className='font-medium hover:text-primary text-white'>
                  <a href='#'>
                    <FaLinkedin className='size-6' />
                  </a>
                </li>
              </ul>
            </div>
            <div className='grid grid-cols-3 gap-6 lg:gap-20'>
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className='mb-6 font-bold text-white'>{section.title}</h3>
                  <ul className='space-y-4 text-sm '>
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className='font-medium hover:text-primary text-gray-800'
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className='mt-20 flex flex-col justify-between text-white gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left'>
            <p>&copy; 2023 designed by</p>
            <ul className='flex justify-center gap-4 lg:justify-start'>
              <li className='hover:text-primary'>
                <a
                  href='https://www.instagram.com/adn0022/'
                  className='font-medium  text-white'
                >
                  {' '}
                  Dan Mayunga
                </a>
              </li>
              <li className='hover:text-primary text-white'>
                <a href='#'> Terms and Conditions & Privacy Policy</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
}
