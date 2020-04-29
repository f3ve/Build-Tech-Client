import TokenService from '../services/tokeen-service'
import config from '../config'

const BuildTechApiService = {
  getBuilds() {
    return fetch(`${config.API_BASE_URL}/builds`, {
      headers: {
        'authorization',`Bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        !res.ok
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getBuildById(buildId) {
    return fetch(`${config.API_BASE_URL}/builds/${buildId}`. {
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        !res.ok
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postBuild(build) {
    return fetch(`${config.API_BASE_URL}/builds`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(build)
    })
  },

  deleteBuild(buildId) {
    return fetch(`${config.API_BASE_URL}/builds/${buildId}`, {
      method: 'DELETE',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()},`
      },
    })
  },
}
