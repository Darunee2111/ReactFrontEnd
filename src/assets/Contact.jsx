import PropTypes from 'prop-types';

export default function Contact(prop) {
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

Hello.PropTypes = {
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};