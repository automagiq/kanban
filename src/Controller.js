import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

function Controller(props) {

const [isModalOpen, setIsModalOpen] = useState(false);



  return (
      <>
          <Button onClick={()=> setIsModalOpen(true)}> Add New Task</Button>
   <Modal isOpen={isModalOpen} >
        <ModalHeader> Add New Task </ModalHeader>
        <ModalBody>

        </ModalBody>
        <ModalFooter>
          <Button >Do Something</Button>
            {' '}
          <Button onClick={()=> setIsModalOpen(false)} >Cancel</Button>
        </ModalFooter>
      </Modal>
</>
  )
}

export default Controller;
