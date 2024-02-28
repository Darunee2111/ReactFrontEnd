const Hello = ({ message, name }) => {
    console.log({ message, name});
    return (
        <div>
            <h1>
                {message} {name}
            </h1>
        </div>
    );
};

export default Hello

import PropTypes from 'prop-types';

Hello.PropTypes = {
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};