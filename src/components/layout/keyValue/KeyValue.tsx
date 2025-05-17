import './keyValue.scss';

type KeyValueProps = {

}

const KeyValue: React.FC = () => {
    return (
        <div className='keyValue'>
            <div className='keyValueHero'>
                <div></div>
                <div></div>
            </div>
            <div className='KeyValueText'>
                <p>PASSIONATE</p>
                <p>
                    Each project starts with an in-depth brand research to ensure
                    we only create products that serve a purpose. We merge art,
                    design, and technology into exciting new solutions.
                </p>
            </div>
        </div>
    )
}
export default KeyValue;