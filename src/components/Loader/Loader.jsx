
import PropTypes from 'prop-types';
import { ColorRing } from 'react-loader-spinner'

export const Loader = ({loading}) => { 
    return (
        <>
            <ColorRing
                visible={loading}
                height="50"
                width="50"
                radius="9"
                color="green"
                
  
/>
        </>
    )
}

Loader.propTypes = {
    loading: PropTypes.bool.isRequired,
}