import axios, { AxiosResponse, AxiosError } from 'axios'
import useSwr from 'swr'
import type { Player } from '../../models'

const usePlayers = () => {
  const { data, error } = useSwr<AxiosResponse<Player[]>, AxiosError>(
    '/api/players',
    axios.get
  )

  return {
    loading: !error && !data,
    players: data?.data || [],
    error
  }
}

export default usePlayers
