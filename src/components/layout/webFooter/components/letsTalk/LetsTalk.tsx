import './letsTalk.scss';

import { BtRegular } from '../../../../ui';

const LetsTalk: React.FC = () => {
    return (
        <section id="letsTalk">
            <div>
                <p>Let’s talk about your project</p>
                <p>
                    Ready to take it to the next level? Contact us today and find out
                    how our expertise can help your business grow.
                </p>
            </div>
            <BtRegular text='GET IN TOUCH' btType='whiteBg' />
        </section>
    )
}
export default LetsTalk;