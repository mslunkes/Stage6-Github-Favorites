// classe que va conter a logica dos dados
// como os dados serão estruturados
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load () {
        this.entries =  [
            {
                login: 'mslunkes',
                name: "Matias Scherer Lunkes",
                public_repos: '41',
                followers: '20'
            },
            {
                login: 'diego3g',
                name: "Diego Fernandes",
                public_repos: '41',
                followers: '20'
            }
        ]
    }
}




// classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites{
    constructor (root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
    }

    update () {
        this.removeAllTr()

        this.entries.forEach(user => {
        const row = this.createRow()

        row.querySelector('.user img').src = `https://github.com/${user.login}.png`
        row.querySelector('.user img').alt = `Imagem de ${user.name}`
        row.querySelector('.user p').textContent = user.name
        row.querySelector('.user span').textContent = user.login 
        row.querySelector('.repositories').textContent = user.public_repos
        row.querySelector('.followers').textContent = user.followers

        this.tbody.append(row)
    })

}

    createRow() {
        const tr = document.createElement('tr')
      tr.innerHTML = `
                    <td class="user">
                        <img src="https://github.com/mslunkes.png" alt="Avatar do Usuário">
                        <a href="https://github.com/mslunkes" target="_blank">
                            <p>Matias Scherer Lunkes</p>
                            <span>mslunkes</span>
                        </a>

                    </td>
                    <td class="repositories">76</td>
                    <td class="followers">9586</td>
                    <td>
                        <button class="remove">&times;</button>
                    </td>         `

        return tr
    }

    removeAllTr() {
       

        this.tbody.querySelectorAll('tr')
        .forEach((tr) => {
            tr.remove()
            
        })
    }
}