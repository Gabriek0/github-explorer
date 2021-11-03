import { RepositoryItem } from "./RepositoryItem";
import { useEffect, useState } from "react";
import '../styles/repositories.scss'

const url = 'https://api.github.com/users/Gabriek0/repos';

interface Repository {
    name: string,
    description: string,
    html_url: string
}

export function RepositoryList() {
    let [repositories, setRespositories] = useState<Repository[]>([]);

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