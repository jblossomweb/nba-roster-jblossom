import axios, { AxiosResponse, AxiosError } from 'axios'
import useSwr from 'swr'
import type { Team } from '../../models'

const useTeams = () => {
  const { data, error } = useSwr<AxiosResponse<Team[]>, AxiosError>(
    '/api/teams',
    axios.get
  )

  return {
    loading: !error && !data,
    teams: data?.data || [],
    error
  }
}

export default useTeams
