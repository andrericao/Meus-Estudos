var appointments = [
  {
      title: "Fazer um cafézinho",
      createdAt: "2023-04-02T02:20:06.209Z",
      opened: false
  },
  {
      title: "Participar da Daily",
      createdAt: "2023-04-02T02:20:06.209Z",
      opened: false
  },
  {
      title: "Codar",
      createdAt: "2023-04-02T02:20:06.209Z",
      opened: false
  }, ,
  {
      title: "Almoçar",
      createdAt: "2023-04-02T02:20:06.209Z",
      opened: false
  }, ,
  {
      title: "Codar de novo",
      createdAt: "2023-04-02T02:20:06.209Z",
      opened: false
  },
  {
      title: "Puxar ferro",
      createdAt: "2023-04-02T02:20:06.209Z",
      opened: true
  },
  {
      title: "Fazer mais um cafézinho",
      createdAt: "2023-04-02T02:20:06.209Z",
      opened: true
  },
  {
      title: "Dar aula",
      createdAt: "2023-04-02T02:20:06.209Z",
      opened: true
  },
  {
      title: "Fazer outro cafézinho",
      createdAt: "2023-04-02T02:20:06.209Z",
      opened: true
  },
  {
      title: "Dormir",
      createdAt: "2023-04-02T02:20:06.209Z",
      opened: true
  }
]

var openedAppointments = []
var closedAppointments = []

const openedAppointmentsListRef = document.querySelector('#openedAppointmentsList')
const closedAppointmentsListRef = document.querySelector('#closedAppointmentsList')

function resetSplitedAppointments() {

  openedAppointments = []
  closedAppointments = []

}

function deleteAppointment(appointment) {

  console.log('APAGOU')
  console.log(appointment)

  // A parte de baixo é extremamente irrelevante para o Checkpoint, apenas serve para exemplificar o ciclo de vida

  appointments = appointments.filter(appointmentItem => appointmentItem !== appointment)

  resetSplitedAppointments()

  // Chamada novamente da função que da inicio a tudo isso para gerar novamente as listas

  splitAppointments()

}

function updateAppointment(appointment) {

  console.log('ATUALIZOU')
  console.log(appointment)

  // A parte de baixo é extremamente irrelevante para o Checkpoint, apenas serve para exemplificar o ciclo de vida

  const indexAppointment = appointments.findIndex(item => item === appointment)

  appointments[indexAppointment].opened = false

  resetSplitedAppointments()

  // Chamada novamente da função que da inicio a tudo isso para gerar novamente as listas

  splitAppointments()

}

function addEventListenersToButtons() {

  const openedItems = Array.from(openedAppointmentsListRef.children)

  openedItems.map(
      (item, index) => {

          const buttonRef = item.children[2]

          const currentAppointmentInArray = openedAppointments[index]

          buttonRef.addEventListener('click', () => updateAppointment(currentAppointmentInArray))

      }
  )

  const closedItems = Array.from(closedAppointmentsListRef.children)

  closedItems.map(
      (item, index) => {

          const buttonRef = item.children[2]

          const currentAppointmentInArray = closedAppointments[index]

          buttonRef.addEventListener('click', () => deleteAppointment(currentAppointmentInArray))

      }
  )

}

function insertAppointsmentHTML() {

  openedAppointmentsListRef.innerHTML = ''
  closedAppointmentsListRef.innerHTML = ''

  openedAppointments.map(
      appointment => {

          const createdAtDate = new Date(appointment.createdAt)
          const createAtFormted = new Intl.DateTimeFormat('pt-BR').format(createdAtDate)

          openedAppointmentsListRef.innerHTML += `
              <li>
                  <h1>${appointment.title}</h1>
                  <time>${createAtFormted}</time>
                  <button>Concluir</button>
              </li>
          `

      }
  )

  closedAppointments.map(
      appointment => {

          const createdAtDate = new Date(appointment.createdAt)
          const createAtFormted = new Intl.DateTimeFormat('pt-BR').format(createdAtDate)

          closedAppointmentsListRef.innerHTML += `
              <li>
                  <h1>${appointment.title}</h1>
                  <time>${createAtFormted}</time>
                  <button>Excluir</button>
              </li>
          `

      }
  )

  addEventListenersToButtons()

}

function splitAppointments() {

    /*for(let appointment of appointments)
    {
        if (appointment.opened) {

              openedAppointments.push(appointment)

          } else {

              closedAppointments.push(appointment)

    }*/

  appointments.map(
      appointment => {

          if (appointment.opened) {

              openedAppointments.push(appointment)

          } else {

              closedAppointments.push(appointment)

          }

      }
  )

  insertAppointsmentHTML()

}

splitAppointments()