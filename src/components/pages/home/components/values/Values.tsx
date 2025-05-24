import './values.scss';
import { KeyValue } from '../../../../layout';
import { passionatePic, resourcefulPic, friendlyPic } from '../../../../../assets/img';

/**
 * Renders the company values included on the home page.
 * 
 * @returns {JSX.Element} - The rendered Values component. 
 */
const Values: React.FC = () => {
    return (
        <section id="values">
            <KeyValue
                keyPicPath={passionatePic}
                keyTitle='PASSIONATE'
                keyText='Each project starts with an in-depth brand research to ensure we only 
            create products that serve a purpose. We merge art, design, and technology 
            into exciting new solutions.'
            />
            <KeyValue
                keyPicPath={resourcefulPic}
                keyTitle='RESOURCEFUL'
                keyText='Everything that we do has a strategic purpose. We use an agile approach 
                in all of our projects and value customer collaboration. It guarantees superior
                 results that fulfill our clients’ needs.'
            />
            <KeyValue
                keyPicPath={friendlyPic}
                keyTitle='FRIENDLY'
                keyText=' We are a group of enthusiastic folks who know how to put people first. 
                Our success depends on our customers, and we strive to give them the best 
                experience a company can provide.'
            />
        </section>
    )
}
export default Values;