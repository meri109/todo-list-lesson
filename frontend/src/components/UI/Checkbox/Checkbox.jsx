import './Checkbox.scss'
import checkedImage from '../../../assets/checked.png' 

function Checkbox({completed, onChecked}) {

    return (
        <div onClick={onChecked} className={'Checkbox ' + (completed ? 'Checkbox-checked' : '')}>
            <img className='checked-icon' src={checkedImage} alt="checked" />
        </div>
    )
    
}

export default Checkbox