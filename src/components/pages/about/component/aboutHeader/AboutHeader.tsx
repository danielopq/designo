import './aboutHeader.scss'

/**
 * Displays the header section of the About Us page, including a title and description
 * about the company's background and mission.
 *
 * @returns {JSX.Element} A header element containing the About Us information.
 */
const AboutHeader: React.FC = () => {
    return (
        <header id="aboutHeader">
            <div></div>
            <div>
                <h1>About Us</h1>
                <p>
                    Founded in 2010, we are a creative agency that produces lasting
                    results for our clients. We’ve partnered with many startups,
                    corporations, and nonprofits alike to craft designs that make
                    real impact. We’re always looking forward to creating brands,
                    products, and digital experiences that connect with our clients’
                    audiences.
                </p>
            </div>
        </header>
    )
}
export default AboutHeader;