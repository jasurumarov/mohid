import { Skeleton } from '@mui/material'
import React from 'react'

const LoadingSkeleton = ({ perPageCount }) => {
    return (
        <div className='grid gap-6 lg:gap-[49px] grid-cols-2 md:grid-cols-3'>
            {
                new Array(perPageCount).fill("").map((_, inx) => (
                    <div key={inx} className='flex flex-col items-center'>
                        <Skeleton
                            sx={{ bgcolor: 'grey.300' }}
                            variant="rectangular"
                            height={337}
                            className='max-w-[292px] w-full h-[337px]'
                        />
                        <Skeleton
                            sx={{ bgcolor: 'grey.300' }}
                            variant="rectangular"
                            height={27}
                            className='mt-[11px] mb-2 max-w-[160px] w-full h-[27px]'
                        />
                        <Skeleton
                            sx={{ bgcolor: 'grey.300' }}
                            variant="rectangular"
                            className='mb-2 max-w-[100px] w-full h-[19px]'
                            height={19}
                        />
                        <Skeleton
                            sx={{ bgcolor: 'grey.300' }}
                            variant="rectangular"
                            height={24}
                            className='w-full max-w-[200px] h-[24px]'
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default LoadingSkeleton
