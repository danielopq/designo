import './btRegular.css';

type BtRegularProps = {
    text: string;
}

const BtRegular:React.FC <BtRegularProps> = ({text}) =>{
    return(
        <button className='btRegular'>{text.toUpperCase()}</button>
    )
}
export default BtRegular;