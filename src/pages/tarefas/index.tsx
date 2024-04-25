import { Link } from "react-router-dom"
import { Box, Button, ButtonGroup, Checkbox, Flex, Input, Spacer } from '@chakra-ui/react'
import ButtonFatec from "../../components/button-fatec"
import Layout from "../../components/layout"



function Tarefas() {
    return (
        <Layout>
        <div>
            <h1>Lista de tarefas</h1>
            <Flex minWidth='min-content' alignItems='center' gap='2'>
            <Input placeholder='Insira o numero da task' border='1px' bg='white' w='100%' p={2} color='black' display='flex' borderRadius='md' gap={5} margin='5px' />
                <Spacer />
                <Checkbox defaultChecked>Realizada?</Checkbox>
                <Button colorScheme='blue'>Inserir</Button>
            </Flex>
            <Flex minWidth='min-content' alignItems='center' gap='2'>
                <Box border='1px' bg='white' w='100%' p={2} color='black' display='flex' borderRadius='md' gap={5} margin='5px'> Tarefa 1</Box>
                <Spacer />
                <ButtonGroup gap='2'>
                    <ButtonFatec type={"button"} label={"Pendente"}></ButtonFatec>
                    <ButtonFatec type={"button"} label={"Excluir"}></ButtonFatec>
                </ButtonGroup>
            </Flex>
            <Flex minWidth='min-content' alignItems='center' gap='2'>
                <Box border='1px' bg='white' w='100%' p={2} color='black' display='flex' borderRadius='md' gap={5} margin='5px'> Tarefa 2</Box>
                <Spacer />
                <ButtonGroup gap='2'>
                    <ButtonFatec type={"button"} label={"Pendente"}></ButtonFatec>
                    <ButtonFatec type={"button"} label={"Excluir"}></ButtonFatec>
                </ButtonGroup>
            </Flex>
            <Flex minWidth='min-content' alignItems='center' gap='2'>
                <Box border='1px' bg='white' w='100%' p={2} color='black' display='flex' borderRadius='md' gap={5} margin='5px'> Tarefa 3</Box>
                <Spacer />
                <ButtonGroup gap='2'>
                    <ButtonFatec type={"button"} label={"Pendente"}></ButtonFatec>
                    <ButtonFatec type={"button"} label={"Excluir"}></ButtonFatec>
                </ButtonGroup>
            </Flex>
            <Link to='/'>Voltar para Home</Link>
        </div>
        </Layout>
    )
}

export default Tarefas