
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export default function Next() {
    return (
        <>
            <Button
                variant="contained"
                color="primary"               
                endIcon={<Icon>skip_next</Icon>}            
                style={{float: 'right'}}
            >Next</Button>
        </>
    );
}