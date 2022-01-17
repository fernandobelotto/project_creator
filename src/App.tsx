import {
  Box, Button, ChakraProvider, Code, extendTheme, FormControl,
  FormLabel, Grid, Heading, Input, Link, Text, ThemeConfig, useClipboard, VStack
} from "@chakra-ui/react";
import {
  Select as ChakraReactSelect
} from "chakra-react-select";
import * as React from "react";


export const App = () => {

  const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
  const theme = extendTheme({ config })

  const [projectName, setProjectName] = React.useState('')
  const [command, setCommand] = React.useState('')
  const [dep, setDep] = React.useState('')
  const { hasCopied, onCopy } = useClipboard(
    command + " " + projectName + (dep ? ('; npm i ' + dep) : '')
  )

  const options = [
    { value: 'react-select', label: 'React Select' },
    { value: 'react-redux', label: 'React Redux' },
    { value: 'redux', label: 'Redux' },
    { value: 'prettier', label: 'Prettier' },
    { value: '@reduxjs/toolkit', label: 'React Toolkit' },
    { value: 'redux', label: 'React Toolkit' },
    { value: 'antd', label: 'Ant Design' },
    { value: 'cypress', label: 'Cypress' },
    { value: 'react-icons', label: 'React Icons' },
    { value: 'eslint', label: 'Eslint' },
    { value: 'react-i18next', label: 'i18next' },
    { value: 'react-dropzone', label: 'React Dropzone' },
    { value: 'axios', label: 'Axios' },
    { value: 'react-table', label: 'React Table' },
    { value: 'react-router-dom@6', label: 'React Router' },
    { value: 'eslint-plugin-jsx-a11y --save-dev', label: 'Eslint a11y' },
    { value: ' @axe-core/react --save-dev', label: 'Axe Core React' },

    { value: '@mui/material @emotion/react @emotion/styled', label: 'Material-UI' },
    { value: '@mui/material @emotion/react @emotion/styled', label: 'Material-UI' },
    { value: '@chakra-ui/icons @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^5', label: 'Chakra-UI' },

  ]

  const baseOptions = [
    { value: 'npx create-react-app@5.0.0', label: 'Create React App' },
    { value: 'npx create-next-app', label: 'Next' },
    { value: 'gatsby new', label: 'Gatsby' },
    { value: 'npx create-remix@latest', label: 'Remix' },
  ]

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3} justifyContent={'center'} alignItems={'center'}
          className="pattern"
        >

          <Box
            // bgGradient='linear(to-t, #01498f, #003569)'
            background={'#01498f'}
            shadow={'2xl'} maxW='xl'
            border='1px solid' borderColor={'gray.300'}
            minW='xl' p='10' borderRadius={'2xl'}>
            <VStack spacing={7} >
              <Heading id="title" fontSize={'6xl'}>
                Project Creator
                {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
              </Heading>
              <FormControl isRequired>
                <FormLabel htmlFor='first-name'>Project Name</FormLabel>
                <Input placeholder='Project Name' value={projectName} onChange={(e) => setProjectName(e.target.value)} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor='base'>Base</FormLabel>
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
              </FormControl>

              <FormControl>

                <FormLabel htmlFor='base'>Dependencies</FormLabel>
                <ChakraReactSelect
                  onChange={(values: any) => {
                    setDep(values.map((element: any) => element.value).toString().replaceAll(',', ' '))
                  }}

                  isMulti
                  isClearable
                  name="dependencies"
                  options={options}
                  className="multi-select"
                />
              </FormControl>




              {/* <FormControl isRequired>
              <FormLabel htmlFor='first-name'>Project Name</FormLabel>
              <Input id='first-name' placeholder='Project Name' value={projectName} onChange={(e) => setProjectName(e.target.value)} />
            </FormControl> */}

              {
                command && projectName ? (
                  <>
                    <Code borderRadius={'lg'}>
                      {command + " " + projectName}
                      {dep ? ('; npm i ' + dep) : ''}
                    </Code>
                    <Button onClick={onCopy} ml={2} colorScheme={'blue'}>
                      {hasCopied ? 'Copied' : 'Copy'}
                    </Button>
                  </>

                ) : null
              }

              <Text fontSize={'sm'}>Made in 🇧🇷 by <Link _hover={{ textDecor: '', }} href='https://fernandobelotto.dev'>Fernando Belotto</Link></Text>
            </VStack>

          </Box>

        </Grid>
      </Box>
    </ChakraProvider >
  )
}