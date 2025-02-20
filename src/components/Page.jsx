import About from '../pages/About';

import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

const Page = ({ currentPage }) => {
    switch (currentPage) {
        case 'About':
            return <About />;
       
        case 'Contact':
            return <Contact />;
        case 'Resume':
            return <Resume />;
        default:
            return <About />;
    }
};

export default Page;