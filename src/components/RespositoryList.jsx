import { RepositoryItem } from "./RepositoryItem";
import { useEffect, useState } from "react";
import '../styles/repositories.scss'

const url = 'https://api.github.com/orgs/rocketseat/repos';

export function RepositoryList() {
    let [repositories, setRespositories] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setRespositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    )
}