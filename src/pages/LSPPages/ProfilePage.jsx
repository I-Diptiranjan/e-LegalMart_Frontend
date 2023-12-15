import React from 'react';
import LSPSidebar from '../../components/Sidebar/LSPSidebar';
import Profile_Info from './Profile_Info';

const LSPProfilePage = () => {
  return (
    <LSPSidebar>
      <Profile_Info
        name={'Vivek Ranjan'}
        joiningDate={'14.04.2023'}
        experience={'5+ Years'}
        desc={
          'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.'
        }
        rating={4.5}
        Specialization={'Criminal Lawyer'}
        email={'abc@gmail.com'}
        phone={7896789768}
      />
    </LSPSidebar>
  );
};

export default LSPProfilePage;
