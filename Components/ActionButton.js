
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export default function ActionButton({ text, color = "primary", icon,  onClick }) {
    return (
        <>
            <Button
                variant="contained"
                color={color}
                endIcon={<Icon>{icon}</Icon>}
                style={{ float: 'right' }}
                onClick={onClick}
            >{text}</Button>
        </>
    );
}