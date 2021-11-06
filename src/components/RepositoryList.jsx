import { useState, useEffect} from "react"
import  React from "react"
import { RepositoryItem } from "./RepositoryItem"

import "../styles/repositories.scss"

const repositoryName= 'unform'



export function RepositoryList(){

    const [repositories, setRepositories] = useState([]);

    useEffect(() =>{
        fetch('https://api.github.com/users/iagoAguiar/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    },[])

    return(
        <section className="repository-list">
            <h1> LIsta de repositórios</h1>

            <ul>
            {repositories.map(repo =>{
              return <RepositoryItem key={repo.name} repository={repo}/>
            }
            )}
           

            </ul>
        </section>
    )
}