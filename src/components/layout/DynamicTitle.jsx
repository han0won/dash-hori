import { Heading } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'

const DynamicTitle = () => {
    const location = useLocation()

    const pathSegments = location.pathname.split('/').filter(Boolean)

    const pageTitle = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : 'Home'
    
    const formattedTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)

    return <Heading fontSize={32}>{formattedTitle}</Heading>
}

export default DynamicTitle
