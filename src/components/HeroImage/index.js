import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { Wrapper, Content, Text } from './HeroImage.styles';

const HeroImage = ({ image, tittle, text }) =>(
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{tittle}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
);

HeroImage.propTypes = {
    image: PropTypes.string,
    tittle: PropTypes.string,
    text: PropTypes.string
};

export default HeroImage;