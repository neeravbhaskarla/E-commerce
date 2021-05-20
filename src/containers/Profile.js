import React from 'react'
import UserProfile from '../assets/svg/profile.svg'
import LogoutIcon from '@material-ui/icons/ExitToApp'
import {Link} from 'react-router-dom'
const Profile=()=>{
    return(
        <>
        <main>
          <section className="bg-black" style={{ height: "500px" }}>
          </section>
          <section className="relative py-4 bg-gray-200">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-80">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <img
                          alt="..."
                          src={UserProfile}
                          className="bg-white shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                          style={{ maxWidth: "150px" }}/>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div className="py-6 px-3 mt-32 sm:mt-0">
                        <Link to='orders' className="bg-black text-white text-center px-4 py-2 font-sans">Your Orders</Link>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                            22
                          </span>
                          <span className="text-sm text-gray-500">Orders</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-12 ml-5">
                    <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2">
                      Neerav
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
                      Customer
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-gray-300 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-1/2 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-gray-800">
                          An artist of considerable range, Jenna the name taken by
                          Melbourne-raised, Brooklyn-based Nick Murphy writes,
                          performs and records all of his own music, giving it a
                          warm, intimate feel with a solid groove structure. An
                          artist of considerable range.
                        </p>
                      </div>
                    </div>
                  <div className="mt-10 ml-5 flex justify-center">
                      <button className="flex flex-row justify-items-center align-middle">
                          <div className="text-red-600">Logout</div><span className="ml-1"><LogoutIcon/></span>
                      </button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    )
}
export default Profile