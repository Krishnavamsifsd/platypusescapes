import Link from "next/link";

export default function Menu() {
  return (
    <ul className="main-menu__list">
      <li>
        <Link href="/">Home</Link>
        {/* <ul>
          <li><Link href="/">Home One</Link></li>
          <li><Link href="/index-2">Home Two</Link></li>
          <li><Link href="/index-3">Home Three</Link></li>
          <li className="dropdown">
            <Link href="#">Header Styles</Link>
            <ul>
              <li><Link href="/">Header One</Link></li>
              <li><Link href="/index-2">Header Two</Link></li>
              <li><Link href="/index-3">Header Three</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <Link href="#">One Page Styles</Link>
            <ul>
              <li><Link href="/one-page-style-one">One Page Styles One</Link></li>
              <li><Link href="/one-page-style-two">One Page Styles Two</Link></li>
              <li><Link href="/one-page-style-three">One Page Styles Three</Link></li>
            </ul>
          </li>
        </ul> */}
      </li>
      <li className="dropdown">
        <Link href="#">About</Link>
        <ul>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/team">Team</Link>
          </li>
          <li>
            <Link href="/team-details">Team Details</Link>
          </li>
          <li>
            <Link href="/testimonials">Testimonials</Link>
          </li>

          <li>
            <Link href="/gallery">Gallery</Link>
          </li>

          <li>
            <Link href="/faq">Faq</Link>
          </li>
          {/* <li>
            <Link href="/404">404 Error</Link>
          </li> */}
        </ul>
      </li>
      <li className="dropdown">
        <Link href="#">Activities</Link>
        <ul>
          <li>
            <Link href="/snorkelling">Snorkelling</Link>
          </li>
          <li>
            <Link href="/beginner-scuba-shore-Dive/">
              Beginner Scuba (Shore Dive)
            </Link>
          </li>
          <li>
            <Link href="/beginner-scuba-boat-Dive/">
              Beginner Scuba (Boat Dive)
            </Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link href="#">Courses</Link>
        <ul>
          <li>
            <Link href="/ocean-swiming">
              Open Water (OCEAN) Swimming Course
            </Link>
          </li>
          <li>
            <Link href="/open-water-diver">Open Water Scuba Diver</Link>
          </li>
          <li>
            <Link href="/advanced-diver">Advanced diver</Link>
          </li>
          <li>
            <Link href="/emergency-first-aid-response">
              Emergency First Aid Response
            </Link>
          </li>
          <li>
            <Link href="/rescue-diver">Rescue diver</Link>
          </li>
        </ul>
      </li>

      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
}
