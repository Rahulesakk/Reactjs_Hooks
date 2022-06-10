import React from 'react'
import {UserContext,ChaneelContext} from '../App'

function ComponentC() {
  return (
      <div>
          dwasdas
          <UserContext.Consumer>
              
              {
                  user => {
                      return (
                        <ChaneelContext.Consumer>
                            {
                                channel => {
                                    return <div>User Context value {user} and the company name is {channel}</div>
                                }

                            }
                        </ChaneelContext.Consumer>
                      )
                  }
              }
          </UserContext.Consumer>
      </div>
  )
}

export default ComponentC