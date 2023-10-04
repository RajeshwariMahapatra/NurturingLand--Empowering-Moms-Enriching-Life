import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pregnant from "./yoga.jpg"

const ChecklistContainer = styled.div`
  max-width: 400px;
  margin: 60px auto;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  h2 {
    padding: 20px;
  }
`;
const Imageside = styled.img`
margin: 20px;
    width: auto;
    height: 80vh;
    padding: 20px;

`;

const Head = styled.div`
    margin: 0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
 justify-content: space-between;
 align-items: center;
  text-align: center;
`;
const MainCon = styled.div`
  display: flex;
  align-items: center;
 /* justify-content: space-between; */
 flex-direction: column;
 width: 100%;
 /* align-items: center; */
  /* text-align: center; */
`;


const ChecklistItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  text-align: center;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Message = styled.div`
  color: green;
  font-weight: bold;
  display: ${props => (props.visible ? 'block' : 'none')};
`;

const MaternalChildHealthChecklist = () => {
  const [checklistItems, setChecklistItems] = useState([
    { id: 1, text: 'Take prenatal vitamins', completed: false },
    { id: 2, text: 'Attend prenatal check-ups', completed: false },
    { id: 3, text: 'Eat a balanced diet', completed: false },
    { id: 4, text: 'Engage in regular physical activity', completed: false },
    { id: 5, text: 'Stay hydrated', completed: false },
  ]);

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const allCompleted = checklistItems.every(item => item.completed);
    setShowMessage(allCompleted);
  }, [checklistItems]);

  const handleCheckboxChange = itemId => {
    const updatedItems = checklistItems.map(item =>
      item.id === itemId ? { ...item, completed: !item.completed } : item
    );
    setChecklistItems(updatedItems);
  };

  return (
   <MainCon>
    <Head>
    <a
				href=""
				className="btn w-full btn-primary text-truncate rounded-0 border-0 position-relative"
				style={{ zIndex: "1000", background: "purple", marginTop: "0px" }}
			>
				<strong>Hey There!</strong> Welcome to NurturingLand. <br />Let's Get Started →
			</a>
    </Head>
   
    <Container>
        
    <ChecklistContainer>
      <h2>Health Checklist</h2>
  
      {checklistItems.map(item => (
        <ChecklistItem key={item.id}>
          <Checkbox
            type="checkbox"
            checked={item.completed || false}
            onChange={() => handleCheckboxChange(item.id)}
          />
          <label>{item.text}</label>
        </ChecklistItem>
      ))}
          <Message visible={showMessage}>You are on the right path!</Message>
    </ChecklistContainer>

    <Imageside src={Pregnant}>

    </Imageside>
    </Container>
    </MainCon>
  );
};

export default MaternalChildHealthChecklist;
