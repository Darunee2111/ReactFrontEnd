import PropTypes from 'prop-types';

export default function Contact(prop) {
    console.log({ message, name});
    return (
        <div>
            <h2>{props.email} {props.phon}</h2>
            <p>Send me a message</p>
        </div>
    );
};


Contact.PropTypes = {
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};