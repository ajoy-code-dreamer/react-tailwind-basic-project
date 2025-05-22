import { useState } from "react";

function App() {
  return (
    <>
      <section id="basic_box_layout">
        <div className="container mx-auto w-[1000px] mt-5">
          <div className="box_wrapper border-4 border-red-600 w-full h-[500px]">
            <div className="box border-2 border-red-600 w-full h-1/6 flex">
              <div className="box w-1/4"></div>
              <div className="box w-1/2 border-x-2 border-red-500 h-full flex flex-col">
                <div className="box border-1 border-red-500 h-1/3"></div>
                <div className="box border-1 border-red-500 h-1/3 flex">
                  <div className="box border-1 border-red-500 w-1/2 h-full"></div>
                  <div className="box border-1 border-red-500 w-1/2 h-full">
                    <div className="box border-1 border-red-500 h-1/2 w-full">
                      <div className="box border-x-2 border-red-500 h-full w-1/2"></div>
                    </div>
                    <div className="box border-1 border-red-500 h-1/2 w-full"></div>
                  </div>
                </div>
                <div className="box border-1 border-red-500 h-1/3"></div>
              </div>
              <div className="box w-1/2"></div>
            </div>
            <div className="box border-2 border-red-600 w-full h-1/6">
              <div className="box border-e-3 border-red-500 w-1/2 h-full">
                <div className="box border-2 border-red-500 h-1/2 w-full"></div>
                <div className="box border-2 border-red-500 h-1/2 w-full">
                  <div className="box border-e-2 border-red-500 w-1/2 h-full">
                  <div className="box border-y-1 border-red-500 w-full h-1/2"></div>
                  <div className="box border-y-1 border-red-500 w-full h-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box border-2 border-red-600 w-full h-1/6">
            
            </div>
            <div className="box border-2 border-red-600 w-full h-1/6"></div>
            <div className="box border-2 border-red-600 w-full h-1/6"></div>
            <div className="box border-2 border-red-600 w-full h-1/6"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
