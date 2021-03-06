
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export default function ActionButton({ text, color = "primary", icon, onClick }) {
    return (
        <div className={"bottom-buttons"}>
            <Button
                variant="contained"
                color={color}
                endIcon={<Icon>{icon}</Icon>}
                style={{ margin: '10px' }}
                onClick={onClick}
            >{text}</Button>
        </div>
    );
}