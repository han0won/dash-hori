import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading } from '@chakra-ui/react'
import { Link as ReactRouterLink, useLocation } from 'react-router-dom'

const History = () => {
    const location = useLocation()
    const pathnames = location.pathname.split('/').filter((x) => x)

    return (
        <Breadcrumb>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to="/">
                    Home
                </BreadcrumbLink>
            </BreadcrumbItem>
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}` 
                
                const isLast = index === pathnames.length - 1 
                
                return (
                    <>
                        <BreadcrumbItem key={index} isCurrentPage={isLast}>
                            <BreadcrumbLink as={ReactRouterLink} to={routeTo}>
                                {name.charAt(0).toUpperCase() + name.slice(1)}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </>
                )
            })}
        </Breadcrumb>
    )
}

export default History
