import {
  Box, Button, Code, DarkMode, FormControl,
  FormLabel, Grid, Heading, Input, Link, Text, useClipboard, VStack
} from "@chakra-ui/react";
import {
  Select as ChakraReactSelect
} from "chakra-react-select";
import * as React from "react";


export const App = () => {

  const [projectName, setProjectName] = React.useState('')
  const [command, setCommand] = React.useState('')
  const [dep, setDep] = React.useState('')
  const { hasCopied, onCopy } = useClipboard(
    command + " " + projectName + (dep ? ';cd ./' + projectName + dep : '')
  )

  const baseOptions = [
    { value: 'npx create-react-app@5.0.0', label: 'Create React App' },
    { value: 'npx create-next-app', label: 'Next' },
    { value: 'gatsby new', label: 'Gatsby' },
    { value: 'npx create-remix@latest', label: 'Remix' },
  ]

  const options = [
    { value: '; npm i react-select', label: 'React Select' },
    { value: '; npm i react-dropzone', label: 'React Dropzone' },
    { value: '; npm i antd', label: 'Ant Design' },
    { value: '; npm i primereact primeicons', label: 'PrimeReact' },
    { value: '; npm i @mui/material @emotion/react @emotion/styled', label: 'Material-UI' },
    { value: '; npm i @chakra-ui/icons @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^5', label: 'Chakra-UI' },
    { value: '; npm i styled-components', label: 'Styled Components' },
    { value: '; npm i @emotion/react', label: 'Emotion' },
    { value: '; npm i -D tailwindcss postcss autoprefixer', label: 'TailwindCSS' },
    { value: '; npm i prettier', label: 'Prettier' },
    { value: '; npm i eslint', label: 'Eslint' },
    { value: '; npm i -D eslint-plugin-jsx-a11y', label: 'Eslint a11y' },
    { value: '; npm i -D @axe-core/react', label: 'Axe Core React' },
    { value: '; npm i react-redux', label: 'React Redux' },
    { value: '; npm i redux', label: 'Redux' },
    { value: '; npm i @reduxjs/toolkit', label: 'React Toolkit' },
    { value: '; npm i redux', label: 'React Toolkit' },
    { value: '; npm i cypress', label: 'Cypress' },
    { value: '; npm i react-icons', label: 'React Icons' },
    { value: '; npm i react-i18next', label: 'i18next' },
    { value: '; npm i axios', label: 'Axios' },
    { value: '; npm i react-table', label: 'React Table' },
    { value: '; npm i react-router-dom@6', label: 'React Router' },
    { value: '; npm i react-query', label: 'React Query' },
    { value: '; npm i react-virtual', label: 'React Virtual' },
  ]


  return (
    <>

      <Box textAlign="center" fontSize="xl"  >
        <Grid minH="100vh" p={3} justifyContent={'center'} alignItems={'center'}
          className="pattern"
        >
          <Box
            background={'#01498f'}
            shadow={'2xl'} maxW='xl'
            border='1px solid' borderColor={'gray.300'}
            minW='xl' p='10' borderRadius={'2xl'}>
            <VStack spacing={7} >
              <Heading id="title" fontSize={'6xl'} >
                Project Creator
              </Heading>
              <FormControl isRequired>
                <FormLabel htmlFor='first-name'>Project Name</FormLabel>
                <Input placeholder='Project Name' value={projectName} onChange={(e) => setProjectName(e.target.value)} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor='base' >Base</FormLabel>
                <DarkMode>

                  <ChakraReactSelect
                    onChange={(value: any) => {
                      if (value === null) {
                        return setCommand("")
                      }
                      setCommand(value.value || "")
                    }}
                    isClearable
                    name="base"
                    options={baseOptions}
                    className="multi-select"
                  />
                </DarkMode>

              </FormControl>
              <FormControl>
                <FormLabel htmlFor='base'>Dependencies</FormLabel>
                <DarkMode>

                  <ChakraReactSelect
                    colorScheme='white'

                    onChange={(values: any) => {
                      setDep(values.map((element: any) => element.value).toString().replaceAll(',', ' '))
                    }}

                    isMulti
                    isClearable
                    name="dependencies"
                    options={options}
                    className="multi-select"
                  />
                </DarkMode>

              </FormControl>

              {
                command && projectName ? (
                  <>
                    <Code borderRadius={'lg'}>
                      {command + " " + projectName + (dep ? ';cd ./' + projectName + dep : '')}
                    </Code>


                    <Button onClick={onCopy} ml={2} colorScheme={'blue'}>
                      {hasCopied ? 'Copied' : 'Copy'}
                    </Button>

                  </>

                ) : null
              }

              <Text fontSize={'sm'} color='white'>Made in 🇧🇷 by <Link _hover={{ textDecor: '', }} href='https://fernandobelotto.dev'>Fernando Belotto</Link></Text>
            </VStack>

          </Box>

        </Grid>
      </Box>
    </>
  )
}