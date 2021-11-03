import React from "react"

const repositoryName= 'unform'

export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1> LIsta de repositórios</h1>

            <ul>
                <li>
                    <strong>{ repositoryName }</strong>
                    <p>Forms in React</p>

                    <a href="">
                        Acessar Repositorio
                    </a>
                </li>
                <li>
                <strong>{ repositoryName }</strong>
                <p>Forms in React</p>

                    <a href="">
                        Acessar Repositorio
                    </a>
                </li>
                <li>
                <strong>{ repositoryName }</strong>
                <p>Forms in React</p>

                    <a href="">
                        Acessar Repositorio
                    </a>
                </li>
            </ul>
        </section>
    )
}