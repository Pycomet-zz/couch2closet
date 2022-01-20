
import MetaTags from "react-meta-tags";

const PageMeta: React.FC = () => {
 return (
    <MetaTags>
        <title>Couch2Closet | Women Clothing Search Engine</title>
        <meta name="description" content="This is a Clothing Search Engine that helps customers find the right / most affordable product from all the avaialable options. Store owners are able to alos register their stores to the platform too" />
        <meta property="og:title" content="Couch2Closet" />
        <meta property="og:image" content="path/to/image.jpg" />
    </MetaTags>
 )
};

export default PageMeta;