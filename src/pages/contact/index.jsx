import React from 'react';
import Footer from '../../shared/components/footer';
import Seo from '../../shared/components/seo';
import Header from '../../shared/components/header';
import SiteHeader from '../../shared/components/site-header';
import SubHeader from '../../shared/components/sub-header';
import { FormButton, FormField, TextArea } from '../../shared/components/form';

const Contact = () => (
  <>
    <Seo title="Contact"/>
    <main className="layout">
      <SiteHeader>
        <Header/>
        <SubHeader title="Contact"/>
      </SiteHeader>
      <div className="flex flow-col items-center justify-center m-0 p-0 bg-b-gray-50 w-full">
        <div className="w-1/2 y-1/2 m-10 bg-white">
          <form method="post" encType="multipart/form-data" action="https://alvgaona.com/api/1.0.0/test" className="mx-10 my-2">
            <div className="flex flex-col items-center justify-center my-0 mx-auto">
              <h3 className="flex text-2xl text-gray-700 font-medium mb-2">Email Me</h3>
              <FormField label="First Name"/>
              <FormField label="Last Name"/>
              <FormField label="Your Email"/>
              <TextArea label="Message"/>
              <FormButton className="btn" name="emailme" value="Send">Send</FormButton>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </main>
  </>
);

export default Contact;
