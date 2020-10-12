import React from 'react';
import {OptForm,Feature} from '../components';
import {HeaderContainer} from '../containers/header';
import {FaqsContainer} from '../containers/faqs';
import {JumbotronContainer} from '../containers/jumbotron';
import {FooterContainer} from '../containers/footer';

export default function Home(){
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more</Feature.Title>
                    <Feature.SubTitle>Watch anywhere . Cancel at anytime</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email address"/>
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break/>
                        <OptForm.Text>
                            Ready to watch ? Enter your Email to create or restart your membership
                        </OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>         
        </>
    );
}