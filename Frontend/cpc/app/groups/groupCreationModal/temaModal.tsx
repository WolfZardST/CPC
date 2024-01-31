
'use client';

import { Button, Select, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { createGroup } from "@/utils/setters";

export default function TemaModal() {
  const subjectMappings = {
    "Fundamentos de programacion": 1,
    "Lenguajes de programacion": 2,
    "Seguridad de la informacion": 3,
    "POO": 4,
    "Sistema de bases de datos": 5,
    "Materia Integredora": 6
  };
  const [openModal, setOpenModal] = useState(true);
  const [groupName, setGroupName] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(subjectMappings["Fundamentos de programacion"]);



  function onCloseModal() {
    setOpenModal(false);
    setGroupName('');
    setSelectedSubject(subjectMappings["Fundamentos de programacion"]);
  }

  const handleSubjectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const subjectKey = event.target.value as keyof typeof subjectMappings;
    setSelectedSubject(subjectMappings[subjectKey]);
  };

  async function createNewGroup() {
    if (groupName.trim() === '' || groupName.length > 100) {
      alert('Please enter a valid group name (up to 100 characters).');
      return;
    }

    const randomImageString = `image_${Math.random().toString(36).substring(2, 15)}`;

    try {
      await createGroup(groupName, selectedSubject, randomImageString);
      alert('Grupo creado correctamente!');
      onCloseModal(); 
    } catch (error) {
      console.error('Error creating group:', error);
      alert('Failed to create group.');
    }
  }

  return (
    <>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Grupo sobre una materia</h3>
            <div className="border-2 border-dashed border-gray-300 py-6 w-1/2 text-center">
              <p className='text-black'>Image upload (+)</p>
            </div>
            <div>
              <Label htmlFor="groupName" value="Nombre" />
              <TextInput
                id="groupName"
                placeholder="Ingrese un nombre para el grupo"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label className="text-lg" htmlFor="materia" value="Seleccione una materia" />
              </div>
              <Select name="materia" id="materia" onChange={handleSubjectChange} required>
              {Object.keys(subjectMappings).map((subject, index) => (
              <option key={index} value={subject}>{subject}</option>
            ))}
              </Select>
            </div>

            <div className="w-full flex items-center justify-center">
              <Button className="w-full" gradientDuoTone="purpleToBlue" onClick={createNewGroup}>Crear Grupo</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}