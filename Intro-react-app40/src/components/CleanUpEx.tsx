import React, { useEffect } from 'react'

const connect = () => console.log('Connecting...')
const disconnecting = () => console.log('disconnecting...')

const CleanUpEx = () => {

    useEffect(() => {

        connect();

        return () => {
           disconnecting();
        };
    }, [])

  return (
    <div>
        Clean Up
    </div>
  )
}

export default CleanUpEx