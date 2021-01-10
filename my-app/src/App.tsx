import { Button, Input, Layout, Paginator, PhoneDetailCard } from 'components';
import React from 'react';
import { Colors } from 'shared/colors';
import styled from 'styled-components';

const Footer = styled.div`
  background: ${Colors.white};
  border-radius: 15px;
  position: sticky;
  bottom: 0;
`;

function App() {
  return (
    <Layout>
      <div className="w-100">
        <Input
          label="Phone Number"
          withoutIcon
          placeholder="Search for a number"
        />
        <Button mode="submit" />
        <Button mode="cancel" />
        <PhoneDetailCard
          style={{ margin: '50px 0' }}
          currency="U$"
          setupPrice={3.34}
          monthyPrice={0.35}
          handleEdit={() => {}}
          handleRemove={() => {}}
          phoneNumber="+55 84 91234-4321"
        />
        <Footer className="py-2 mt-5">
          <Paginator />
        </Footer>
      </div>
    </Layout>
  );
}

export default App;
