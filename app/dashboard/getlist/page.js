
export default function GetList(){
    return(
        <section className="w-full">
        <TableData/>
        </section>
    )
}

function TableData(){
    switch(localStorage.getItem("role")){
    case "USER":
    return(
    <section>
    <div className="relative flex flex-col gap-5 overflow-x-auto">
    <span className="text-xl font-semibold text-loginicon">My Applications</span>
    <table className="w-full text-sm text-left border-l border-r">
        <thead className="text-xs uppercase border-b border-t">
            <tr>
                <th scope="col" className="px-6 py-3">
                Id  
                </th>
                <th scope="col" className="px-6 py-3">
                Job Title
                </th>
                <th scope="col" className="px-6 py-3">
                Company
                </th>
                <th scope="col" className="px-6 py-3">
                Posted Time
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium">
                Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                Laptop
                </td>
                <td className="px-6 py-4">
                $2999
                </td>
                <td className="px-6 py-4">
                $2999
                </td>
            </tr>    
        </tbody>
    </table>
    </div>
    </section>
    )
    break;
    case "ADMIN":
        return(
            <section>
            <div className="relative flex flex-col gap-5 overflow-x-auto">
            <span className="text-xl font-semibold text-loginicon">My Posts</span>
            <table className="w-full text-sm text-left border-l border-r">
                <thead className="text-xs uppercase border-b border-t">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                        Id  
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Job Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Posted Time
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium">
                        Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">
                        Laptop
                        </td>
                        <td className="px-6 py-4">
                        $2999
                        </td>
                        <td className="px-6 py-4">
                        $2999
                        </td>
                    </tr>    
                </tbody>
            </table>
            </div>
            </section>
            )
            break;
            default:
            break;
        }
}