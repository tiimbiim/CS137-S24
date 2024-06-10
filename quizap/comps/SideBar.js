import { useRouter } from 'next/router';

const SideBar = () => {
  const router = useRouter();

  const handleNavLinkClick = (route) => {
    router.push(`/${route}`);
  };

  return ( 
    <div className="sidenav">
      <a onClick={() => handleNavLinkClick('mainPage')}>Home</a>
      <a onClick={() => handleNavLinkClick('library')}>Library</a>
      <a onClick={() => handleNavLinkClick('discover')}>Discover</a>
      <a onClick={() => handleNavLinkClick('stats')}>Stats</a>
      {/*<a onClick={() => handleNavLinkClick('schedule')}>Schedule</a> */}
    </div>
  );
}
 
export default SideBar;